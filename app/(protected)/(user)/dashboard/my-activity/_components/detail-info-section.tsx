import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SELECT_TAGS, SelectTag } from '@/constants/tag';
import { ActivityCreateFormProps } from '@/app/(protected)/(user)/dashboard/my-activity/_components/activity-create-form';
import Select, { MultiValue } from 'react-select';

interface Props extends ActivityCreateFormProps {
  className?: string;
}

export default function DetailInfoSection({ form, className }: Props) {
  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   form.setValue('images', e.target.files);
  // };

  return (
    <AccordionItem className={className} value="item-3" asChild>
      <Card className="shadow-md">
        <AccordionTrigger className="p-0">
          <CardHeader>
            <CardTitle>세부사항</CardTitle>
          </CardHeader>
        </AccordionTrigger>
        <AccordionContent>
          <CardContent>
            <Card className="shadow-[inset_0_0_5px_rgb(0,0,0,0.08)] p-2 flex flex-col gap-3">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">제목</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="제목을 입력해 주세요" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">설명</FormLabel>
                    <FormControl>
                      <Textarea placeholder="설명을 입력해 주세요" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tags"
                render={({ field: { onChange, value } }) => (
                  <FormItem>
                    <FormLabel className="text-lg">태그</FormLabel>
                    <FormControl>
                      <Select
                        isMulti
                        name="tags"
                        closeMenuOnSelect={false}
                        options={SELECT_TAGS}
                        value={SELECT_TAGS.filter((tag) => value?.includes(tag.value))}
                        onChange={(option: MultiValue<SelectTag>) => {
                          if (!option || option.length === 0) {
                            onChange(null);
                            return;
                          }
                          onChange(option.map((tag) => tag.value));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="maximumCount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">최대 인원</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="최대 인원을 설정해 주세요" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </Card>
          </CardContent>
          {/* <CardContent>
            <FormField
              control={form.control}
              name="description"
              render={() => (
                <Input
                  type="file"
                  placeholder="이미지를 추가해 주세요"
                  onChange={handleFileChange}
                />
              )}
            />
          </CardContent> */}
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
}
